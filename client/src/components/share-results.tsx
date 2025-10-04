import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Share2, Copy, Check, Facebook, Linkedin, Mail } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { useToast } from '@/hooks/use-toast';

interface ShareResultsProps {
  toolName: string;
  result: string;
  description?: string;
}

export function ShareResults({ toolName, result, description }: ShareResultsProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  // Generate share text
  const shareText = description 
    ? `${toolName}: ${description} - Result: ${result}`
    : `${toolName} Result: ${result}`;
  
  const shareUrl = window.location.href;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(shareUrl);

  // Social share URLs
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent(toolName)}&body=${encodedText}%0A%0A${encodedUrl}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "Share your results with others.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const openShare = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          data-testid="button-share-results"
        >
          <Share2 className="w-4 h-4" />
          Share Results
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md" data-testid="dialog-share">
        <DialogHeader>
          <DialogTitle>Share Your Results</DialogTitle>
          <DialogDescription>
            Share your {toolName.toLowerCase()} results with others
          </DialogDescription>
        </DialogHeader>

        {/* Result Preview */}
        <div className="p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm font-medium mb-1">{toolName}</p>
          {description && (
            <p className="text-sm text-muted-foreground mb-2">{description}</p>
          )}
          <p className="text-lg font-bold text-primary">{result}</p>
        </div>

        {/* Social Share Buttons */}
        <div className="space-y-3">
          <p className="text-sm font-medium">Share on social media:</p>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="gap-2 justify-start"
              onClick={() => openShare(twitterUrl)}
              data-testid="button-share-twitter"
            >
              <FaXTwitter className="w-4 h-4" />
              Twitter
            </Button>
            <Button
              variant="outline"
              className="gap-2 justify-start"
              onClick={() => openShare(facebookUrl)}
              data-testid="button-share-facebook"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </Button>
            <Button
              variant="outline"
              className="gap-2 justify-start"
              onClick={() => openShare(linkedinUrl)}
              data-testid="button-share-linkedin"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="gap-2 justify-start"
              onClick={() => openShare(emailUrl)}
              data-testid="button-share-email"
            >
              <Mail className="w-4 h-4" />
              Email
            </Button>
          </div>
        </div>

        {/* Copy Link */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Or copy link:</p>
          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={copyToClipboard}
            data-testid="button-copy-link"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy Link
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
